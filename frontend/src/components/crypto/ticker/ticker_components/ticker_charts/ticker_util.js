export const handlePrice = (num) => {
  if (num > 1) {
    return num.toFixed(2);
  } else if (num > 0.1) {
    return num.toFixed(3);
  } else {
    return num.toFixed(5);
  }
};

export const handleStepSize = (num) => {
  if (num > 1.5) {
    return 1;
  } else if (num > 0.1) {
    return 0.05;
  } else {
    return 0.005;
  }
};

export const getTime = (timeData) => {
  return timeData.map((arr) => {
    const dateObject = new Date(arr[0]);
    const date = dateObject.toLocaleString("en-US");
    return date;
  });
};
