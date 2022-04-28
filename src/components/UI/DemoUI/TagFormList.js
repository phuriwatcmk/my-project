import { Group, TextInput, Box, Text, Center } from "@mantine/core";
import { useForm, formList } from "@mantine/form";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { ReactComponent as DotSix } from "../../../assets/icon/dotsSix.svg";
import styled from "styled-components";

const StyledGroup = styled(Group)`
  top: auto !important;
  left: auto !important;
`;

export default function Demo() {
  const form = useForm({
    initialValues: {
      employees: formList([
        { name: "ไทย" },
        { name: "วิทยาศาสตร์" },
        { name: "สังคม" },
        { name: "อังกฤษ" },
        { name: "คณิตศาสตร์" },
      ]),
    },
  });

  const fields = form.values.employees.map((_, index) => {
    // console.log("index", index);
    return (
      <Draggable key={index} index={index} draggableId={index.toString()}>
        {(provided) => {
          const dragringProvided = provided.draggableProps;
          return (
            <StyledGroup mt="xs" {...dragringProvided} ref={provided.innerRef}>
              <Center {...provided.dragHandleProps}>
                <DotSix />
              </Center>
              <TextInput
                radius="xl"
                size="xs"
                {...form.getListInputProps("employees", index, "name")}
              />
            </StyledGroup>
          );
        }}
      </Draggable>
    );
  });

  return (
    <Box sx={{ maxWidth: 500 }} mx="auto">
      {fields.length > 0 ? (
        <Group mb="xs"></Group>
      ) : (
        <Text color="dimmed" align="center">
          No Tag Here..
        </Text>
      )}

      <DragDropContext
        onDragEnd={({ destination, source }) =>
          form.reorderListItem("employees", {
            from: source.index,
            to: destination.index,
          })
        }
      >
        <Droppable droppableId="dnd-list" direction="vertical">
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {fields}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
}
