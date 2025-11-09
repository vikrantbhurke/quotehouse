"use client";
import { ActionIcon } from "@mantine/core";
import { RootState } from "@/global/states/store";
import { IconPointFilled } from "@tabler/icons-react";
import { useDispatch, useSelector } from "react-redux";
import { setIsZen } from "@/global/states/global-slice";
import { boxShadow } from "@/global/styles/styles";

export function ButtonZen({ color }: any) {
  const dispatch = useDispatch();
  const { isZen } = useSelector((state: RootState) => state.global);

  const zenOn = () => dispatch(setIsZen(true));
  const zenOff = () => dispatch(setIsZen(false));

  return (
    <ActionIcon
      size="lg"
      radius="xl"
      style={isZen ? {} : boxShadow(color)}
      onClick={isZen ? zenOff : zenOn}
      variant={isZen ? "transparent" : "white"}>
      <IconPointFilled size={25} stroke={3} color={isZen ? "white" : color} />
    </ActionIcon>
  );
}
