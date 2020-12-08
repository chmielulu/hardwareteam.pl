export default (blocks) => {
  const structure = [];
  const headers = blocks.filter(
    (block) => block.type === "header" && block.data.level === 1
  );

  if (headers.length === 1) {
    structure.push({
      name: headers[0].data.text,
      id: headers[0].data.id,
    });

    return structure;
  }

  const headersRanges = [];
  headers.forEach((header, index) => {
    const headerIndex = blocks.indexOf(header);

    if (blocks[headerIndex + 1] === undefined) {
      headersRanges.push({ min: headerIndex, max: headerIndex });
    } else if (index === headers.length - 1) {
      headersRanges.push({ min: headerIndex, max: blocks.length });
    } else {
      const nextHeaderIndex = blocks.indexOf(headers[index + 1]);
      headersRanges.push({ min: headerIndex, max: nextHeaderIndex });
    }
  });

  headersRanges.forEach(({ min, max }, index) => {
    if (min === max) {
      structure.push({
        name: headers[index].data.text,
        id: headers[index].data.id,
      });
    } else {
      const subHeaders = blocks
        .slice(min, max)
        .filter((block) => block.type === "header" && block.data.level === 2);

      if (!subHeaders) {
        structure.push({
          name: headers[index].data.text,
          id: headers[index].data.id,
        });
      } else {
        const mappedSubHeaders = subHeaders.map((header) => {
          return {
            name: header.data.text,
            id: header.data.id,
          };
        });

        structure.push({
          name: headers[index].data.text,
          id: headers[index].data.id,
          subHeaders: mappedSubHeaders,
        });
      }
    }
  });

  return structure;
};
