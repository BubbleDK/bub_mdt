import { Card, Group, Text, Tooltip, ActionIcon, Image, LoadingOverlay, createStyles } from '@mantine/core';
import { IconLinkOff, IconDeviceFloppy, IconShare, IconEye, IconFileZip, IconTrash } from '@tabler/icons';
import {useEffect, useState} from "react";

const useStyles = createStyles((theme) => ({
  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },
}));

const ProfileInformation: React.FC<any> = ({citizen, setCitizen}: any) => {
  const [visible, setVisible] = useState(true);
  const { classes, theme } = useStyles();
  useEffect(() => { setVisible(true); setTimeout(() => {setVisible(false)}, 1000) }, [citizen]);
  if (citizen.length === 1) {
    return (
      <div style={{ height: 530, position: 'relative' }}>
        <LoadingOverlay visible={visible} overlayOpacity={1} radius="xs" />
        <Card withBorder shadow="sm" radius="xs" style={{height: 530}}>
          <Card.Section withBorder inheritPadding py="xs">
            <Group position="apart">
              <Text weight={500}>Citizen</Text>
              <Group spacing={8} mr={0}>
                <Tooltip label="Save" withArrow>
                  <ActionIcon className={classes.action}>
                    <IconDeviceFloppy size={16} color={theme.colors.green[6]} />
                  </ActionIcon>
                </Tooltip>
                <Tooltip label="Unlink" withArrow>
                  <ActionIcon className={classes.action} onClick={() => { setCitizen([])}}>
                    <IconLinkOff size={16} color={theme.colors.gray[5]} />
                  </ActionIcon>
                </Tooltip>
              </Group>
            </Group>
          </Card.Section>

          <Card.Section mt="sm" style={{ height: 220 }} inheritPadding pb="md">
            <Image
              width={260}
              height={180}
              src={citizen[0].image}
              alt="With default placeholder"
              withPlaceholder
            />
          </Card.Section>
        </Card>
      </div>
    );
  }
  return (
    <Card withBorder shadow="sm" radius="xs" style={{height: 530}}>
      <Card.Section withBorder inheritPadding py="xs">
        <Group position="apart">
          <Text weight={500}>Citizen</Text>
          <Group spacing={8} mr={0}>
            <ActionIcon className={classes.action} disabled>
              <IconDeviceFloppy size={16} color={theme.colors.green[6]} />
            </ActionIcon>
            <ActionIcon className={classes.action} disabled>
              <IconLinkOff size={16} color={theme.colors.gray[7]} />
            </ActionIcon>
          </Group>
        </Group>
      </Card.Section>

      <Card.Section mt="sm" style={{ height: 220 }} inheritPadding pb="md">
        <Image
          width={260}
          height={180}
          src={null}
          alt="With default placeholder"
          withPlaceholder
        />
      </Card.Section>
    </Card>
  )
}

export default ProfileInformation;