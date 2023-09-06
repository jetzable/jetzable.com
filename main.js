  import axios from 'https://cdn.jsdelivr.net/npm/axios@1.3.5/+esm';
  
  const githubReposCount = document.getElementById('github-repos-count');
  const tiktokFollowersCount = document.getElementById('tiktok-followers-count');

  emailjs.init('2OSzXwaSax4Sr2wJV');

  async function getGithubInfo(username) {
    const url = `https://api.github.com/users/${username}`;
    const { data } = await axios.get(url);
    console.log(data);
    githubReposCount.innerHTML = data.public_repos;
  };

  async function getTiktokInfo(username) {
    const url = `https://www.tiktok.com/v2/${username}/info`;
    const resp = await axios({
      method: 'get',
      url,
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        "fields": ["followerCount"]
      }
    });
    console.log(resp);
    tiktokFollowersCount.innerHTML = resp.data;
  };

  // getGithubInfo('jetzable');
  // getTiktokInfo('lababito');