// "use client"

// import { useState } from "react"
// import { useForm } from "react-hook-form"
// import { Eye, EyeOff, Mail, Lock, ArrowRight } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// interface FormValues {
//   email: string
//   password: string
// }

// export default function LoginPage() {
//   const [showPassword, setShowPassword] = useState(false)

//   const form = useForm<FormValues>({
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//     mode: "onChange", 
//   })

//   const onSubmit = (data: FormValues) => {
//     console.log("Form submitted:", data)
//   }

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
//       <Card className="w-full max-w-md overflow-hidden sm:max-w-lg md:max-w-2xl">
//         <CardHeader className="space-y-1 bg-slate-800 text-white">
//           <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
//           <CardDescription className="text-slate-300">
//             Enter your credentials to sign in to your account
//           </CardDescription>
//         </CardHeader>

//         <CardContent className="p-6">
//           <Form {...form}>
//             <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
//               {/* Email Field */}
//               <FormField
//                 control={form.control}
//                 name="email"
//                 rules={{
//                   required: "Email is required",
//                   pattern: {
//                     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
//                     message: "Please enter a valid email address",
//                   },
//                 }}
//                 render={({ field }) => (
//                   <div className="flex flex-col md:flex-row md:items-start md:gap-4">
//                     <FormLabel className="md:w-1/3 md:pt-2.5 text-right hidden md:block">Email address</FormLabel>
//                     <div className="flex-1">
//                       <FormItem className="space-y-1">
//                         <FormLabel className="md:hidden">Email address</FormLabel>
//                         <div className="relative">
//                           <FormControl>
//                             <Input placeholder="you@example.com" type="email" className="pl-10" {...field} />
//                           </FormControl>
//                           <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
//                         </div>
//                         <FormMessage className="text-xs" />
//                       </FormItem>
//                     </div>
//                   </div>
//                 )}
//               />

//               {/* Password Field */}
//               <FormField
//                 control={form.control}
//                 name="password"
//                 rules={{
//                   required: "Password is required",
//                   minLength: {
//                     value: 6,
//                     message: "Password must be at least 6 characters",
//                   },
//                 }}
//                 render={({ field }) => (
//                   <div className="flex flex-col md:flex-row md:items-start md:gap-4">
//                     <FormLabel className="md:w-1/3 md:pt-2.5 text-right hidden md:block">Password</FormLabel>
//                     <div className="flex-1">
//                       <FormItem className="space-y-1">
//                         <FormLabel className="md:hidden">Password</FormLabel>
//                         <div className="relative">
//                           <FormControl>
//                             <Input
//                               placeholder="••••••"
//                               type={showPassword ? "text" : "password"}
//                               className="pl-10 pr-10"
//                               {...field}
//                             />
//                           </FormControl>
//                           <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
//                           <Button
//                             type="button"
//                             variant="ghost"
//                             size="sm"
//                             className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 p-0"
//                             onClick={() => setShowPassword(!showPassword)}
//                           >
//                             {showPassword ? (
//                               <EyeOff className="h-4 w-4 text-gray-500" />
//                             ) : (
//                               <Eye className="h-4 w-4 text-gray-500" />
//                             )}
//                             <span className="sr-only">{showPassword ? "Hide password" : "Show password"}</span>
//                           </Button>
//                         </div>
//                         <FormMessage className="text-xs" />
//                       </FormItem>
//                     </div>
//                   </div>
//                 )}
//               />

//               <div className="flex flex-col md:flex-row md:items-center md:gap-4">
//                 <div className="md:w-1/3" />
//                 <div className="flex-1">
//                   <Button type="submit" className="w-full">
//                     Sign in
//                     <ArrowRight className="ml-2 h-4 w-4" />
//                   </Button>
//                 </div>
//               </div>
//             </form>
//           </Form>
//         </CardContent>

//         <CardFooter className="flex flex-col space-y-4 bg-slate-50 px-6 py-4">
//           <div className="text-sm text-center">
//             <span className="text-muted-foreground">Don't have an account? </span>
//             <a href="#" className="font-medium text-slate-800 hover:underline">
//               Sign up
//             </a>
//           </div>
//           <div className="text-sm text-center">
//             <a href="#" className="font-medium text-slate-800 hover:underline">
//               Forgot your password?
//             </a>
//           </div>
//         </CardFooter>
//       </Card>
//     </div>
//   )
// }



import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Login Page Information</h1>
    </div>
  )
}

export default page


