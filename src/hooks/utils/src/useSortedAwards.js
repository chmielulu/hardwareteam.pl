import kinds from "@components/atoms/Award/kinds";

const useSortedAwards = (awards) => {
  const arrayToSorted = awards.map((name) => ({
    name,
    priority: kinds[name].priority,
  }));

  const sortedArray = arrayToSorted.sort((a, b) => {
    if (a.priority > b.priority) {
      return 1;
    }

    if (b.priority > a.priority) {
      return -1;
    }

    return 0;
  });

  return sortedArray.map(({ name }) => name);
};

export default useSortedAwards;
