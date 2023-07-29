// const isValidFacebookURL = (url) => {
//   const facebookRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/.*/i;
//   return facebookRegex.test(url);
// };

// const vaildateObj = {
//   facebook: isValidFacebookURL,
// };

const isValidURL = (url, platform) => {
  const urlPatterns = {
    pinterest: /^(https?:\/\/)?(www\.)?pinterest\.com\/.*/i,
    dribbble: /^(https?:\/\/)?(www\.)?dribbble\.com\/.*/i,
    medium: /^(https?:\/\/)?(www\.)?medium\.com\/.*/i,
    twitter: /^(https?:\/\/)?(www\.)?twitter\.com\/.*/i,
    youtube: /^(https?:\/\/)?(www\.)?youtube\.com\/.*/i,
    instagram: /^(https?:\/\/)?(www\.)?instagram\.com\/.*/i,
    linkedin: /^(https?:\/\/)?(www\.)?linkedin\.com\/.*/i,
    github: /^(https?:\/\/)?(www\.)?github\.com\/.*/i,
    facebook: /^(https?:\/\/)?(www\.)?facebook\.com\/.*/i,
  };

  const regex = urlPatterns[platform.toLowerCase()];

  return regex ? regex.test(url) : false;
};

export const validate = (inputArr) => {
  let arr = [];
  inputArr.map((i) => {
    if (!isValidURL(i.link, i.platform)) {
      arr.push(i.platform);
    }
  });
  return arr;
};
