import { Badge, Button, createStyles, Divider, Group, Image, Modal, Paper, ScrollArea, Table, Text, TypographyStylesProvider, useMantineTheme } from "@mantine/core";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
    comment: {
      padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
    },
  
    body: {
      paddingTop: theme.spacing.sm,
      fontSize: theme.fontSizes.sm,
    },
  
    content: {
      '& > p:last-child': {
        marginBottom: 0,
      },
    },
}));

const announcements = [
    {
        Header: 'This is a header',
        writtenBy: 'John Doe',
        postedAt: 'Just now',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias earum quasi ducimus reprehenderit dignissimos, fugiat, aliquam accusamus, commodi cupiditate soluta est consectetur voluptatem minus provident repellendus temporibus necessitatibus molestiae quae asperiores. Ab consequuntur obcaecati soluta minima, quas blanditiis voluptas corrupti cum vel quasi ea voluptatum enim dicta dolorum in laboriosam.',
        key: '1',
    },
    {
        Header: 'This is too',
        writtenBy: 'John Doe',
        postedAt: '10 minutes ago',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias earum quasi ducimus reprehenderit dignissimos, fugiat, aliquam accusamus, commodi cupiditate soluta est consectetur voluptatem minus provident repellendus temporibus necessitatibus molestiae quae asperiores. Ab consequuntur obcaecati soluta minima, quas blanditiis voluptas corrupti cum vel quasi ea voluptatum enim dicta dolorum in laboriosam.',
        key: '2',
    },
]

interface IAnnouncements {
    Header: 'string',
    writtenBy: 'string',
    postedAt: 'string',
    body: 'string',
}

const BulletinBoard: React.FC = () => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = 760 / 2 - theme.spacing.md / 2;
    const [modalInfo, setModalInfo] = useState<IAnnouncements>();
    const [opened, setOpened] = useState(false);
    const openModel = (info: any) => {
        setModalInfo(info)
        setOpened(true)
    }
    const rows = announcements.map((item) => (
        <tr key={item.key}>
            <td>
                <Paper withBorder className={classes.comment}>
                    <Group>
                        <div>
                            <Text size="sm">{item.Header}</Text>
                            <Text size="xs" color="dimmed">
                                {item.postedAt}
                            </Text>
                        </div>
                    </Group>
                    <TypographyStylesProvider className={classes.body}>
                        <div className={classes.content} dangerouslySetInnerHTML={{ __html: item.body.substring(0, 150) + '...' }} />
                    </TypographyStylesProvider>

                    <Button variant="outline" compact style={{ marginTop: 10 }} onClick={() => openModel(item)}>
                        View
                    </Button>
                </Paper>
            </td>
        </tr>
    ));

    return (
        <>
            <ScrollArea style={{ height: SECONDARY_COL_HEIGHT, paddingRight: 5 }}>
                <Table verticalSpacing="sm">
                    <thead>
                        <th>
                            Bulletin Board
                        </th>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </ScrollArea>
            
            {modalInfo && <Modal opened={opened} onClose={() => { setOpened(false); setModalInfo(undefined) }} centered overlayOpacity={0.2} withCloseButton={false} size={500}>
                <Group position="apart">
                    <Text size="lg" weight={500}>{modalInfo.Header}</Text>
                    <Badge>{modalInfo.postedAt}</Badge>
                </Group>

                <Divider my="sm" />

                <Text size="sm" color="dimmed" mt={5}>
                    {modalInfo.body}
                </Text>

                <Divider my="sm" />

                <div>
                    <Text size="xs" color="dimmed">
                        {"Written by"}
                    </Text>
                    <Text weight={500} size="sm">
                        {modalInfo.writtenBy}
                    </Text>
                </div>
            </Modal>}
        </>
    )
}

export default BulletinBoard;