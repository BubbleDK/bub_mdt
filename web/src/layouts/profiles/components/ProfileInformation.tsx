import {
  Card,
  Group,
  Text,
  Tooltip,
  ActionIcon,
  Image,
  createStyles,
  Modal,
  TextInput,
  SimpleGrid,
  Stack,
  Textarea,
  MultiSelect,
  Chip,
} from '@mantine/core';
import {IconLinkOff, IconDeviceFloppy, IconId, IconUser, IconAddressBook, IconPhone} from '@tabler/icons';
import {useState, Dispatch, useEffect} from "react";
import {Incidents, Profile} from "../../../types";

const useStyles = createStyles((theme) => ({
  action: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    }),
  },

  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },
}));

interface IProps {
  setCitizen: Dispatch<Profile[]>;
  setIncidents: Dispatch<Incidents[]>;
  citizen?: Profile[];
}

const ProfileInformation: React.FC<IProps> = ({citizen, setCitizen, setIncidents}: IProps) => {
  const [citizenPicture, setCitizenPicture] = useState(false);
  const [tags, setTags] = useState([
    { value: 'informer', label: 'Informer' },
    { value: 'wanted', label: 'Wanted' },
    { value: 'dangerous', label: 'Dangerous' },
  ]);
  const { classes, theme } = useStyles();
  if (citizen !== undefined && citizen.length === 1) {
    return (
      <>
        <div style={{ height: 530 }}>
          <Card withBorder shadow="sm" radius="xs" style={{height: 530}} className={classes.card}>
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
                    <ActionIcon className={classes.action} onClick={() => { setCitizen([]); setIncidents([])}}>
                      <IconLinkOff size={16} color={theme.colors.gray[5]} />
                    </ActionIcon>
                  </Tooltip>
                </Group>
              </Group>
            </Card.Section>

            <Card.Section mt="sm" style={{ height: 160, marginRight: '-3px', marginLeft: '-3px' }} inheritPadding pb="md">
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
                  <TextInput icon={<IconPhone size={16} />} placeholder={citizen[0].phone_number} radius="xs" disabled/>
                </Stack>
              </SimpleGrid>
            </Card.Section>

            <Card.Section mt="sm" inheritPadding pb="md" style={{ height: 120, marginRight: '-3px', marginLeft: '-3px' }}>
              <Text size="md" weight={500}>
                Licenses
              </Text>

              <Group style={{paddingTop: 5, paddingBottom: 5}}>
                <Chip defaultChecked variant="filled" radius="xs" color="teal">Drivers License</Chip>
                <Chip defaultChecked variant="filled" radius="xs" color="indigo">Firearms License</Chip>
              </Group>

              <Text size="md" weight={500}>
                Tags
              </Text>
              <MultiSelect
                style={{paddingTop: 5}}
                data={tags}
                placeholder="Select Tags"
                searchable
                creatable
                getCreateLabel={(query) => `+ Create ${query}`}
                onCreate={(query) => {
                  const item = { value: query, label: query };
                  setTags((current) => [...current, item]);
                  return item;
                }}
              />
            </Card.Section>

            <Card.Section mt="sm" inheritPadding pb="md" style={{ height: 125, marginRight: '-3px', marginLeft: '-3px' }}>
              <Textarea
                placeholder="Notes"
                autosize
                minRows={4.2}
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
    <Card withBorder shadow="sm" radius="xs" style={{height: 530}} className={classes.card}>
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

      <Card.Section mt="sm" style={{ height: 160, marginRight: '-3px', marginLeft: '-3px' }} inheritPadding pb="md">
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

      <Card.Section mt="sm" inheritPadding pb="md" style={{ height: 120, marginRight: '-3px', marginLeft: '-3px' }}>
        <Text size="md" weight={500}>
          Licenses
        </Text>

        <Group style={{paddingTop: 5, paddingBottom: 5}}>
          <Chip disabled defaultChecked variant="filled" radius="xs" color="teal">Drivers License</Chip>
          <Chip disabled defaultChecked variant="filled" radius="xs" color="indigo">Firearms License</Chip>
        </Group>

        <Text size="md" weight={500}>
          Tags
        </Text>
        <MultiSelect
          disabled
          style={{paddingTop: 5}}
          data={tags}
          placeholder="Select Tags"
          searchable
          creatable
          getCreateLabel={(query) => `+ Create ${query}`}
          onCreate={(query) => {
            const item = { value: query, label: query };
            setTags((current) => [...current, item]);
            return item;
          }}
        />
      </Card.Section>

      <Card.Section mt="sm" inheritPadding pb="md" style={{ height: 125, marginRight: '-3px', marginLeft: '-3px' }}>
        <Textarea
          placeholder="Notes"
          autosize
          minRows={4.2}
          maxRows={6}
          disabled
        />
      </Card.Section>
    </Card>
  )
}

export default ProfileInformation;