import { useRouter } from 'next/dist/client/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

const useSearchBar = () => {
    const router = useRouter();
    const { search } = router.query;
    const [value, setValue] = useState(search ? decodeURIComponent(search as string) : '');

    useEffect(() => {
        if (search) setValue(decodeURIComponent(search as string));
    }, [search]);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!value) return;

        router.push(`/items?search=${value}`);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return { value, handleSubmit, handleInputChange };
}

export default useSearchBar;
