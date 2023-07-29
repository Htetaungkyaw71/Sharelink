const isValidFacebookURL = (url) => {
  const facebookRegex = /^(https?:\/\/)?(www\.)?facebook\.com\/.*/i;
  return facebookRegex.test(url);
};

const vaildateObj = {
  facebook: isValidFacebookURL,
};

export const validate = (inputArr) => {
  let arr = [];
  inputArr.map((i) => {
    if (!vaildateObj[i.platform](i.link)) {
      arr.push(i.platform);
    }
  });
  return arr;
};
