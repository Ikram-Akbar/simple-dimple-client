import { useContext } from "react";
import { ServiceContext } from "../Provider/ServiceProvider";

export  const useService = () => useContext(ServiceContext);