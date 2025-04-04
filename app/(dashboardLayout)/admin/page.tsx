import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[
          "Total Users",
          "Active Products",
          "Monthly Revenue",
          "Support Tickets",
        ].map((title, i) => (
          <Card key={i}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {i === 2
                  ? "$12,345"
                  : i === 0
                  ? "1,234"
                  : i === 1
                  ? "567"
                  : "23"}
              </div>
              <p className="text-xs text-muted-foreground">
                {i % 2 === 0
                  ? "+5.2% from last month"
                  : "-2.3% from last month"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest user actions</CardDescription>
          </CardHeader>
          <CardContent>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="mb-4 flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="h-10 w-10 rounded-full bg-slate-200"></div>
                <div>
                  <p className="font-medium">
                    User #{i + 1} updated their profile
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {i + 1} hour{i !== 0 ? "s" : ""} ago
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Popular Products</CardTitle>
            <CardDescription>Most viewed items this month</CardDescription>
          </CardHeader>
          <CardContent>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="mb-4 flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0"
              >
                <div className="h-10 w-10 rounded bg-slate-200"></div>
                <div className="flex-1">
                  <p className="font-medium">Product #{i + 1}</p>
                  <p className="text-sm text-muted-foreground">
                    {1000 - i * 120} views
                  </p>
                </div>
                <div className="text-sm font-medium">
                  ${(99.99 - i * 10).toFixed(2)}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Add more content to demonstrate scrolling */}
      <Card>
        <CardHeader>
          <CardTitle>Additional Content</CardTitle>
          <CardDescription>Scroll to see more</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[...Array(10)].map((_, i) => (
              <p key={i} className="text-muted-foreground">
                This is additional content to demonstrate the scrolling behavior
                of the admin panel. The sidebar remains at 100vh while this
                content can be scrolled independently.
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
