import Button from "@/components/common/Button";
import { AiOutlinePlusSquare } from "react-icons/ai";

type Props = {
    id: number
    change: (n: number) => void
}

export default function Child({ id, change }: Props) {

    return (
        <div>
            <h4>收到id：{id}</h4>
            <Button icon={AiOutlinePlusSquare} onClick={() => { change(id + 1) }}>改变父组件</Button>
        </div>
    )
}