import MyButton from "../common/MyButton";
import MyClose from "../common/MyClose";

export default function Login({ handleClose }: { handleClose: (data?: any) => void }) {

    return (
        <div className="g-mask">
            <header>
                <MyButton>Sign in</MyButton>
                <MyButton>Sign up</MyButton>
                <MyClose onClose={() => handleClose("close")}></MyClose>
            </header>
        </div>
    )
}