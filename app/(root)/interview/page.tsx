import {getCurrentUser} from "@/entities/user";
import {Agent} from "@/features/session";

export default async function Page() {
    const user = await getCurrentUser();

    return (
        <>
            <h3>Interview generation</h3>

            {user &&  <Agent
                userName={user?.name}
                userId={user?.id}
                type="generate"
            />}
        </>
    );
};