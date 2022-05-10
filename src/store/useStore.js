import { useContext } from "react";
import { storesContext } from "./storesContext";

const useStore = () => useContext(storesContext);

export default useStore;
