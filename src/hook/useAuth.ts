import useAppStore from "./useAppStore";

export default function useAuth() {
    const { token } = useAppStore();
    return token !== ""
}