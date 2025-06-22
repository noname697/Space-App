import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
  width: 758px;
  display: flex;
  justify-content: space-between;
  h3 {
    color: #d9d9d9;
    font-size: 24px;
    margin: 0;
  }
`;

const BotoesContainer = styled.div`
  display: flex;
  gap: 24px;
`;

const BotaoEstilizado = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

const Tags = () => {
  return (
    <TagsContainer>
      <h3>Busque por tags: </h3>
      <BotoesContainer>
        {tags.map((tag) => (
          <BotaoEstilizado key={tag.id}>
            <span>{tag.titulo}</span>
          </BotaoEstilizado>
        ))}
      </BotoesContainer>
    </TagsContainer>
  );
};

export default Tags;
