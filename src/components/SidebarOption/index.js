import React from "react";

// Styled components
import {
  SidebarOptionContainer,
  SidebarOptionChannel,
} from "./SidebarOption.styles";

// Firebase stuff
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const SidebarOption = ({ Icon, title, addChannelOption }) => {
  const addChannel = async () => {
    const channelName = prompt("Please enter the channel name.");

    if (channelName) {
      const roomsCol = collection(db, "rooms");
      await addDoc(roomsCol, {
        name: channelName,
      });
    }
  };

  const selectChannel = () => {};

  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

export default SidebarOption;
