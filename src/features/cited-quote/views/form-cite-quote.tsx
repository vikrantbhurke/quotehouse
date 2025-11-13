"use client";
import {
  Text,
  Title,
  Space,
  Button,
  Textarea,
  TextInput,
  Stack,
} from "@mantine/core";
import clsx from "clsx";
import { citedQuote } from "../actions";
import { outfit } from "@/global/styles/fonts";
import { notifications } from "@mantine/notifications";
import { hasLength, isEmail, isNotEmpty, useForm } from "@mantine/form";

const text = clsx(outfit.className, "antialiased");
const taCenter = "text-center";
const h1 = clsx(taCenter, text);

const border = { border: "3px solid var(--tx-four)" };

export function FormCiteQuote() {
  const form = useForm({
    mode: "controlled",
    initialValues: {
      content: "",
      author: "",
      citation: "",
      email: "",
    },

    validate: {
      content: hasLength(
        { min: 10, max: 500 },
        "Content must be 10 - 500 characters long"
      ),

      author: isNotEmpty("Author name is required"),
      email: isEmail("Invalid email"),
    },
  });

  const handleSubmit = async (values: any) => {
    try {
      await citedQuote(values);
      form.reset();

      const message = (
        <Text fz={20} ta="center">
          Message sent successfully.
        </Text>
      );

      notifications.show({
        message,
        radius: "xl",
        color: "#05df72",
        withCloseButton: false,
        position: "bottom-center",
        style: { backgroundColor: "#05df72" },
      });
    } catch (error: any) {
      console.error(error);

      const message = (
        <Text fz={20} ta="center">
          An error occured. Message not sent.
        </Text>
      );

      notifications.show({
        message,
        radius: "xl",
        color: "#ff6467",
        withCloseButton: false,
        position: "bottom-center",
        style: { backgroundColor: "#ff6467" },
      });
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Title order={1} className={h1}>
          Contact
        </Title>

        <Textarea
          label={
            <Text fz={20} fw={600}>
              Quote
            </Text>
          }
          fw={500}
          size="lg"
          autosize
          radius="lg"
          minRows={2}
          maxRows={4}
          className={text}
          styles={{ input: border }}
          classNames={{ input: text }}
          placeholder={"An awesome quote"}
          key={form.key("content")}
          {...form.getInputProps("content")}
        />

        <TextInput
          label={
            <Text fz={20} fw={600}>
              Author
            </Text>
          }
          fw={500}
          size="lg"
          radius="lg"
          className={text}
          styles={{ input: border }}
          placeholder="Author's name"
          classNames={{ input: text }}
          key={form.key("author")}
          {...form.getInputProps("author")}
        />

        <TextInput
          label={
            <Text fz={20} fw={600}>
              Email
            </Text>
          }
          fw={500}
          size="lg"
          radius="lg"
          className={text}
          styles={{ input: border }}
          placeholder="Your email ID"
          classNames={{ input: text }}
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <TextInput
          label={
            <Text fz={20} fw={600}>
              Citation
            </Text>
          }
          fw={500}
          size="lg"
          radius="lg"
          className={text}
          styles={{ input: border }}
          classNames={{ input: text }}
          key={form.key("citation")}
          {...form.getInputProps("citation")}
          placeholder="Source link, video timestamp, book page..."
        />

        <Space />

        <Button
          type="submit"
          variant="filled"
          radius="xl"
          size="xl"
          color="var(--tx-one)">
          <Text c="white" fz={24} fw={600}>
            Send
          </Text>
        </Button>
      </Stack>
    </form>
  );
}
