// import ResetPassword from "./resetPassword2"
// import ResetPassword from "./resetPassword1"
// import Dashboard from "./dashboard"
import SignIn from "./signin"

export default function Home() {
    return (
    <>
    <div className="container mx-auto h-full">
      <SignIn/>
      {/*<ResetPassword/>*/} {/* default export in resetPassword1 and resetPassword2 is named ResetPassword */}
      {/* <Dashboard/> */}
    </div>
    </>)

}
