import {
  Card,
  Group,
  Text,
  Tooltip,
  ActionIcon,
  Image,
  LoadingOverlay,
  createStyles,
  Modal,
  TextInput,
  SimpleGrid,
  Stack,
  Textarea,
} from '@mantine/core';
import {IconLinkOff, IconDeviceFloppy, IconId, IconUser, IconAddressBook, IconPhone} from '@tabler/icons';
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
  const [citizenPicture, setCitizenPicture] = useState(false);
  const { classes, theme } = useStyles();
  useEffect(() => { setVisible(true); setTimeout(() => {setVisible(false)}, 1000) }, [citizen]);
  if (citizen.length === 1) {
    return (
      <>
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

            <Card.Section mt="sm" style={{ height: 220, marginRight: 0, marginLeft: 0 }} inheritPadding>
              <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
                <Image
                  width={260}
                  height={180}
                  src={citizen[0].image}
                  alt="Placeholder for citizen picture"
                  withPlaceholder
                  onClick={() => setCitizenPicture(true)}
                />
                <Stack spacing="xs" justify="space-around">
                  <TextInput icon={<IconId size={16} />} placeholder={citizen[0].stateId} radius="xs" disabled/>
                  <TextInput icon={<IconUser size={16} />} placeholder={`${citizen[0].firstName} ${citizen[0].lastName}`} radius="xs" disabled/>
                  <TextInput icon={<IconAddressBook size={16} />} placeholder={citizen[0].job.charAt(0).toUpperCase() + citizen[0].job.slice(1)} radius="xs" disabled/>
                  <TextInput icon={<IconPhone size={16} />} placeholder={citizen[0].phoneNumber} radius="xs" disabled/>
                </Stack>
              </SimpleGrid>
            </Card.Section>

            <Card.Section mt="sm" inheritPadding pb="md">
              Hello
            </Card.Section>

            <Card.Section mt="sm" inheritPadding pb="md">
              <Textarea
                placeholder="Notes"
                autosize
                minRows={4}
                maxRows={6}
              />
            </Card.Section>
          </Card>
        </div>

        <Modal opened={citizenPicture} onClose={() => {
          setCitizenPicture(false);
        }} centered overlayOpacity={0.2} withCloseButton={false} size={540}>
          <Image
            width={500}
            height={380}
            src={citizen[0].image}
            alt="Placeholder for citizen picture"
            withPlaceholder
          />
        </Modal>
      </>
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

      <Card.Section mt="sm" style={{ height: 220, marginRight: 0, marginLeft: 0 }} inheritPadding pb="md">
        <SimpleGrid cols={2} spacing="xs" verticalSpacing="xs">
          <Image
            width={260}
            height={180}
            src={null}
            alt="Placeholder for citizen picture"
            withPlaceholder
          />
          <Stack spacing="xs" justify="space-around">
            <TextInput icon={<IconId size={16} />} placeholder={"STATE ID"} radius="xs" disabled/>
            <TextInput icon={<IconId size={16} />} placeholder={"FULL NAME"} radius="xs" disabled/>
            <TextInput icon={<IconId size={16} />} placeholder={"JOB"} radius="xs" disabled/>
            <TextInput icon={<IconId size={16} />} placeholder={"PHONE NUMBER"} radius="xs" disabled/>
          </Stack>
        </SimpleGrid>
      </Card.Section>

      <Card.Section mt="sm" inheritPadding pb="md">
        <Textarea
          placeholder="Notes"
          autosize
          minRows={4}
          maxRows={6}
        />
      </Card.Section>
    </Card>
  )
}

export default ProfileInformation;