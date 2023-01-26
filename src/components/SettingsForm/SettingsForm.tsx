import { DeleteIcon, PencilIcon } from "assets";
import { ColorMode } from "components";
import { ResetPasswordForm, UpdateProfileForm } from "components";
import { motion } from "framer-motion";
import { useState } from "react";
import { getUserInfo, useAppSelector } from "store";
import { Container, Setting, Name, Wrapper, EditButton, ProfileText, Subtitle } from "./style";

export const SettingsForm = () => {
  const { email } = useAppSelector(getUserInfo);
  const [isProfileFormOpen, setIsProfileFormOpen] = useState(false);

  const toggleOpen = () => {
    setIsProfileFormOpen(!isProfileFormOpen);
  };

  return (
    <Container>
      <motion.div
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Setting>
          <Name>Profile</Name>
          <Wrapper>
            {isProfileFormOpen ? (
              isProfileFormOpen && (
                <>
                  <UpdateProfileForm toggleProfileOpen={toggleOpen} />
                  <EditButton>
                    <DeleteIcon onClick={toggleOpen} />
                  </EditButton>
                </>
              )
            ) : (
              <>
                <ProfileText>
                  <Subtitle>Email: </Subtitle>
                  {email}
                </ProfileText>
                <EditButton>
                  <PencilIcon onClick={toggleOpen} />
                </EditButton>
              </>
            )}
          </Wrapper>
        </Setting>
        <Setting>
          <Name>Password</Name>
          <Wrapper>
            <ResetPasswordForm />
          </Wrapper>
        </Setting>
        <Setting>
          <Name>ColorMode</Name>
          <Wrapper>
            <ColorMode />
          </Wrapper>
        </Setting>
      </motion.div>
    </Container>
  );
};
