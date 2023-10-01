import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => ({
    address: params.address,
});
