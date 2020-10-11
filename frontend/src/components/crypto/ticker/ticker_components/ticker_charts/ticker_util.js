export const handlePrice = (num) => {
  switch (num) {
    case num > 1:
      return num.toFixed(2);
    case num > 0.1:
      return num.toFixed(3);
    default:
      return num.toFixed(5);
  }
};

export const handleStepSize = (num) => {
  switch (num) {
    case num > 1.5:
      return 1;
    case (num > 0.1) :
      return 0.05;
    default:
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
