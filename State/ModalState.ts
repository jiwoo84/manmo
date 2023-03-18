import { atom } from "recoil";

const IsModalOpen = atom<boolean>({
  key: "isModalOpen",
  default: false,
});

export default IsModalOpen;
