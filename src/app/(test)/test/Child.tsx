import MyButton from "@/components/common/MyButton";
import { AiOutlinePlusSquare } from "react-icons/ai";

type Props = {
    id: number
    change: (n: number) => void
}

export default function Child({ id, change }: Props) {

    return (
        <div>
            <h4>收到id：{id}</h4>
            <MyButton icon={AiOutlinePlusSquare} onClick={() => { change(id + 1) }}>改变父组件</MyButton>
        </div>
    )
}