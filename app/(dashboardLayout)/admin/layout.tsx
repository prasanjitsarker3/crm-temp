import { Button } from "@/components/ui/button";
import AdminCustomLayout from "./layout/layout";

const AdminMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminCustomLayout >{children}</AdminCustomLayout>
    </div>
  );
};

export default AdminMainLayout;
