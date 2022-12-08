const Line = (props: { theme: string }) => {
  if (props.theme === 'dark') {
    return (
      <div className="border-t-2 mt-16 mb-4 border-background-200 rounded-lg w-60" />
    );
  }
  return (
    <div className="border-t-2 mt-16 mb-4 border-background-100 rounded-lg w-60" />
  );
};

export default Line;
