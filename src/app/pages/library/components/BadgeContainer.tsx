
export function BadgeContainer(Badge) {
  return ({ selectedTopics, onRemove }) => (
    <div className="flex flex-wrap p-2">
      {selectedTopics.map((topic, index) => (
        <Badge key={index} label={topic} onRemove={() => onRemove(topic)} />
      ))}
    </div>
  );
}


