import { Suspense } from 'react';
import { RecentPosts } from './components/RecentPosts';
import { MoodSummary } from './components/MoodSummary';
import { NewPostForm } from './components/NewPostForm';
import { UserGreeting } from './components/UserGreeting';

const DashboardPage = async () => {
  return (
    <div className='container mx-auto px-4 py-8'>
      <UserGreeting />
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
        <div className='md:col-span-2'>
          <NewPostForm />
          <Suspense fallback={<div>Loading recent posts...</div>}>
            <RecentPosts />
          </Suspense>
        </div>
        <div>
          <Suspense fallback={<div>Loading mood summary...</div>}>
            <MoodSummary />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
