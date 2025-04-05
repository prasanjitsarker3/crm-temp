"use client";
import { useAppDispatch } from "@/redux/hooks";
import { setBreadcrumbs } from "@/redux/Slice/breadcrumbSlice";
import React, { useEffect } from "react";

const UserManagementPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setBreadcrumbs([{ label: "Users", active: true, path: "/admin/users" }])
    );
  }, [dispatch]);
  return (
    <div>
      <h1>User Management Page</h1>
    </div>
  );
};

export default UserManagementPage;

// Single User View Section Breadcrumb

// const dispatch = useAppDispatch()
//   const params = useParams()
//   const userId = params?.userId as string

//   useEffect(() => {
//     dispatch(
//       setBreadcrumbs([
//         { label: "Users", path: "/admin/users" },
//         { label: "User Details", active: true, path: `/admin/users/${userId}` },
//       ]),
//     )
//   }, [dispatch, userId])
