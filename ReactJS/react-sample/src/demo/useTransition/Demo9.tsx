import { useState, useTransition } from 'react';
import TabButton from './TabButton';
import AboutTab from './AboutTab';
import PostsTab from './PostTab';


export const Demo9 = () => {
    const [isPending, startTransition] = useTransition();
    const [tab, setTab] = useState('about');

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        });
    }

    return (
        <>
            <TabButton
                isActive={tab === 'about'}
                onClick={() => selectTab('about')}
            >
                About
            </TabButton>
            <TabButton
                isActive={tab === 'posts'}
                onClick={() => selectTab('posts')}
            >
                Posts (slow)
            </TabButton>
            <hr />
            {tab === 'about' && <AboutTab />}
            {tab === 'posts' && <PostsTab />}
        </>
    );
}
