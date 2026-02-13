import { role } from "./state.svelte";

export const canCreateBlog = () => {
    return role();
}

export function canEditBlog() {
    return role();
}

export function canUpdateBlog() {
    return role();
}

export function canReadBlog() {
    return role();
}
