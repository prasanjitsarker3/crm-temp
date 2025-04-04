import { Button } from "@/components/ui/button";
import AdminCustomLayout from "./layout/layout";

const AdminMainLayout = ({ children }: { children: React.ReactNode }) => {
    const headerActions = (
        <>
          <Button variant="outline" size="sm">
            Help
          </Button>
          <Button size="sm">New Item</Button>
        </>
      )
  return (
    <div>
      <AdminCustomLayout headerActions={headerActions}>{children}</AdminCustomLayout>
    </div>
  );
};

export default AdminMainLayout;
