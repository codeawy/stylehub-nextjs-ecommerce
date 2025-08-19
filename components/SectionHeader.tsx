const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col items-center text-center space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
      <p className="text-muted-foreground max-w-[600px]">{description}</p>
    </div>
  );
};

export default SectionHeader;
