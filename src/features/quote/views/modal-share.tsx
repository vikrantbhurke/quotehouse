"use client";
import { IconCheck, IconCopy, IconX } from "@tabler/icons-react";
import {
  ActionIcon,
  CopyButton,
  Group,
  Modal,
  ScrollArea,
  Stack,
  Text,
  Tooltip,
} from "@mantine/core";
import {
  BlueskyIcon,
  BlueskyShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  ThreadsIcon,
  ThreadsShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import clsx from "clsx";
import { outfit } from "@/global/styles/fonts";

export function ModalShare({ author, page, opened, close }: any) {
  const title = `Read this ${author} quote at`;
  const url = `${process.env.NEXT_PUBLIC_APP_URL!}/quote/${page}`;

  const border = { border: "3px solid var(--tx-four)" };
  const text = clsx(outfit.className, "antialiased");

  return (
    <Modal
      radius="lg"
      centered
      opened={opened}
      onClose={close}
      title={
        <Text fw={900} fz={20} className={text}>
          Share Quote Link
        </Text>
      }
      closeButtonProps={{
        icon: <IconX size={20} stroke={3} color="var(--tx-three)" />,
      }}>
      <Stack gap="lg" px="sm" pb="md">
        <Stack gap={4}>
          <Group gap={0} justify="space-between">
            <Text fz="sm" fw="bold">
              Share URL
            </Text>

            <CopyButton value={url}>
              {({ copied, copy }) => (
                <Tooltip
                  label={copied ? "Copied" : "Copy"}
                  withArrow
                  position="right">
                  <ActionIcon
                    color={copied ? "teal" : "gray"}
                    variant="subtle"
                    onClick={copy}>
                    {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
                  </ActionIcon>
                </Tooltip>
              )}
            </CopyButton>
          </Group>

          <Group
            p="xs"
            gap="xs"
            justify="space-between"
            style={{ ...border, borderRadius: "0.5rem" }}>
            <ScrollArea w={300} scrollbarSize={4}>
              <Text fz="xs">{url}</Text>
            </ScrollArea>
          </Group>
        </Stack>

        <Stack gap={4}>
          <Text fz="sm" fw="bold">
            Share on Social Media
          </Text>

          <Group
            pt="xs"
            px="xs"
            pb={6}
            gap="xs"
            style={{ ...border, borderRadius: "0.5rem" }}>
            <WhatsappShareButton url={url} title={title} separator=" ">
              <WhatsappIcon size={30} round={true} />
            </WhatsappShareButton>

            <TwitterShareButton url={url} title={title}>
              <XIcon size={30} round={true} />
            </TwitterShareButton>

            <FacebookShareButton url={url} title={title}>
              <FacebookIcon size={30} round={true} />
            </FacebookShareButton>

            <LinkedinShareButton url={url} title={title}>
              <LinkedinIcon size={30} round={true} />
            </LinkedinShareButton>

            <ThreadsShareButton url={url} title={title}>
              <ThreadsIcon size={30} round={true} />
            </ThreadsShareButton>

            <BlueskyShareButton url={url} title={title}>
              <BlueskyIcon size={30} round={true} />
            </BlueskyShareButton>

            <TelegramShareButton url={url} title={title}>
              <TelegramIcon size={30} round={true} />
            </TelegramShareButton>
          </Group>
        </Stack>
      </Stack>
    </Modal>
  );
}
