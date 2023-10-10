import useSystemStore from "./useSystemStore";

export default function useAuth() {
    const { token } = useSystemStore();
    return token !== ""
}