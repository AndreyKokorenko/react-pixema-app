import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
  User,
  updateEmail,
} from "firebase/auth";
import { getFirebaseMessage } from "utils";
import { FirebaseError, FirebaseErrorCode } from "utils";

interface IUserState {
  email: string;
  isLoading: boolean;
  error: null | FirebaseError;
  isAuth: boolean;
}

const userInfo = JSON.parse(localStorage.getItem("userInfo")!);

const initialState: IUserState = {
  email: userInfo && userInfo.email,
  isLoading: false,
  error: null,
  isAuth: userInfo && userInfo.isAuth,
};

export const fetchSignUpUser = createAsyncThunk<
  { creationTime: string; userEmail: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignUpUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const creationTime = userCredential.user.metadata.creationTime as string;
    const userEmail = userCredential.user.email as string;

    return { creationTime, userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const fetchSignInUser = createAsyncThunk<
  { creationTime: string; userEmail: string },
  { email: string; password: string },
  { rejectValue: FirebaseError }
>("user/fetchSignInUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const creationTime = userCredential.user.metadata.creationTime as string;
    const userEmail = userCredential.user.email as string;

    return { creationTime, userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const resetPassword = createAsyncThunk<void, { email: string }, { rejectValue: string }>(
  "user/resetPassword",
  async ({ email }, { rejectWithValue }) => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };

      return rejectWithValue(getFirebaseMessage(firebaseError.code));
    }
  }
);

export const updateUserEmail = createAsyncThunk<
  { userEmail: string },
  { newEmail: string },
  { rejectValue: FirebaseError }
>("user/updateUserEmail", async ({ newEmail }, { rejectWithValue }) => {
  const auth = getAuth();
  const user = auth.currentUser as User;
  const userEmail = newEmail;

  try {
    await updateEmail(user, newEmail);
    return { userEmail };
  } catch (error) {
    const firebaseError = error as { code: FirebaseErrorCode };

    return rejectWithValue(getFirebaseMessage(firebaseError.code));
  }
});

export const updateUserPassword = createAsyncThunk<
  void,
  {
    email: string;
    currentPassword: string;
    newPassword: string;
  },
  { rejectValue: string }
>("user/updateUserPassword", async ({ newPassword, currentPassword }, { rejectWithValue }) => {
  const auth = getAuth();
  const user = auth.currentUser as User;
  const credential = EmailAuthProvider.credential(user.email as string, currentPassword);

  if (user)
    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, newPassword);
    } catch (error) {
      const firebaseError = error as { code: FirebaseErrorCode };

      return rejectWithValue(getFirebaseMessage(firebaseError.code));
    }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserName: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
      localStorage.setItem("user", JSON.stringify(state));
    },
    getLogOutUser: (state) => {
      state.isAuth = false;
      localStorage.setItem("user", JSON.stringify(state));
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchSignUpUser.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignUpUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.email = payload.userEmail;
      state.isAuth = true;
    });
    builder.addCase(fetchSignUpUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        state.isAuth = false;
      }
    });
    builder.addCase(fetchSignInUser.pending, (state) => {
      state.isLoading = true;
      state.isAuth = false;
      state.error = null;
    });
    builder.addCase(fetchSignInUser.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.email = payload.userEmail;
      state.isAuth = true;
    });
    builder.addCase(fetchSignInUser.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
        state.isAuth = false;
      }
    });
    builder.addCase(resetPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(resetPassword.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(resetPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
      }
    });
    builder.addCase(updateUserPassword.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateUserPassword.fulfilled, (state) => {
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(updateUserPassword.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
      }
    });
    builder.addCase(updateUserEmail.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(updateUserEmail.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.email = payload.userEmail;
      state.error = null;
    });
    builder.addCase(updateUserEmail.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
      }
    });
  },
});

export default userSlice.reducer;
