import { PropsWithChildren } from "react";
import MuiSetting from "src/libraries/mui/MuiSetting";
import ReactQuerySetting from "src/libraries/reactQuery/ReactQuerySetting";
import ToastSetting from "src/libraries/toast/ToastSetting";

export default function AppRegister({ children }: PropsWithChildren) {
  return (
    <MuiSetting>
      <ReactQuerySetting>
        {children}
        <ToastSetting />
      </ReactQuerySetting>
    </MuiSetting>
  );
}
