"use client";
import {
  Text,
  Title,
  Stack,
  Space,
  Button,
  Textarea,
  TextInput,
} from "@mantine/core";
import clsx from "clsx";
import { citedQuote } from "../actions";
import { outfit } from "@/global/styles/fonts";
import { notifications } from "@mantine/notifications";
import { hasLength, isEmail, isNotEmpty, useForm } from "@mantine/form";
import { AlterQuoteCitation } from "./alert-quote-citation";

const text = clsx(outfit.className, "antialiased");
const taCenter = "text-center";
const h1 = clsx(taCenter, text);

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

      const message = (
        <Text fz={20} ta="center">
          Quote cited successfully
        </Text>
      );

      notifications.show({
        message,
        radius: "xl",
        color: "var(--mantine-color-green-5)",
        withCloseButton: false,
        position: "bottom-center",
        style: {
          border: "2px solid #111",
          backgroundColor: "var(--mantine-color-green-5)",
        },
      });
    } catch (error: any) {
      const message = (
        <Text fz={20} ta="center">
          {error?.message ? error.message : "Quote citation failed"}
        </Text>
      );

      notifications.show({
        message,
        radius: "xl",
        color: "var(--mantine-color-red-5)",
        withCloseButton: false,
        position: "bottom-center",
        style: {
          border: "2px solid #111",
          backgroundColor: "var(--mantine-color-red-5)",
        },
      });
    } finally {
      form.reset();
    }
  };

  return (
    <form onSubmit={form.onSubmit(handleSubmit)}>
      <Stack>
        <Title order={1} className={h1}>
          Cite A Quote
        </Title>

        <AlterQuoteCitation />

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
          placeholder="Author's name"
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
          placeholder="Your email ID"
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
          key={form.key("citation")}
          {...form.getInputProps("citation")}
          placeholder="Source link, video timestamp, book page..."
        />

        <Space />

        <Button
          size="xl"
          radius="xl"
          type="submit"
          variant="filled"
          color="var(--mantine-color-dark-6)">
          <Text c="white" fz={24} fw={600}>
            Send
          </Text>
        </Button>
      </Stack>
    </form>
  );
}
