import Layout from '@/components/Layout';
// import FavouriteProjects from '../components/FavouriteProjects';
import LatestCode from '@/components/LatestCode';
import Passion from '@/components/Passion';
import getLatestRepos from '@/lib/getLatestRepos';
import userData from '@/constants/data';

export default function Home({ repositories }) {
  return (
    <Layout
      title="Raymond Lau - Developer, Creator"
      description="This is a template built specifically for my blog - Creating a developer portfolio that gets you a job."
    >
      <Passion />
      {/* <FavouriteProjects /> */}
      <LatestCode repositories={repositories} />
    </Layout>
  );
}

export const getServerSideProps = async () => {
  let token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
