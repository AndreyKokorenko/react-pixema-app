export type FirebaseErrorCode =
  | "auth/email-already-in-use"
  | "auth/invalid-email"
  | "auth/wrong-password"
  | "auth/user-not-found"
  | "auth/email-already-exists";

export enum FirebaseError {
  EMAIL_ALREADY_IN_USE = "It`s email used",
  WRONG_PASSWORD = "Invalid password",
  NOT_FOUND = "User not found, please enter correct email",
  UNKNOWN_ERROR = "Unknow error, please reload page",
  code = "code",
}

export const getFirebaseMessage = (code: FirebaseErrorCode) => {
  switch (code) {
    case "auth/email-already-in-use":
      return FirebaseError.EMAIL_ALREADY_IN_USE;
    case "auth/wrong-password":
      return FirebaseError.WRONG_PASSWORD;
    case "auth/user-not-found":
      return FirebaseError.NOT_FOUND;
    default:
      return FirebaseError.UNKNOWN_ERROR;
  }
};
