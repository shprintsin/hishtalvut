import { getTutorials } from '@/app/actions/fetch';

import TutorialCard from '../parts/TutorialCard';

export async function TutorialBlock() {
    const content = await getTutorials();
    return (
    <div className={`pt-5 flex h-full bg-white`}>
         
        {content.map((tutorial, index) => {
            return (
                <TutorialCard key={index}tutorial={tutorial} />
                );
            })}
            </div>
    
    );
}
;
