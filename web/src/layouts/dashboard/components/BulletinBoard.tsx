import { Button, createStyles, Group, Menu, Paper, ScrollArea, Table, Text, TypographyStylesProvider, useMantineTheme } from "@mantine/core";
import { IconListDetails, IconSearch, IconSettings, IconTrash } from "@tabler/icons";

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

    },
    {
        Header: 'This is too',
        writtenBy: 'John Doe',
        postedAt: '10 minutes ago',
        body: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias earum quasi ducimus reprehenderit dignissimos, fugiat, aliquam accusamus, commodi cupiditate soluta est consectetur voluptatem minus provident repellendus temporibus necessitatibus molestiae quae asperiores. Ab consequuntur obcaecati soluta minima, quas blanditiis voluptas corrupti cum vel quasi ea voluptatum enim dicta dolorum in laboriosam.',

    },
]

const BulletinBoard: React.FC = () => {
    const { classes } = useStyles();
    const theme = useMantineTheme();
    const SECONDARY_COL_HEIGHT = 760 / 2 - theme.spacing.md / 2;
    const rows = announcements.map((item) => (
        <tr key={item.Header}>
            <td>
                <Paper withBorder radius="md" className={classes.comment}>
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

                    <Button variant="outline" compact style={{ marginTop: 10 }}>
                        View
                    </Button>
                </Paper>
            </td>
        </tr>
    ));

    return (
        <ScrollArea style={{ height: SECONDARY_COL_HEIGHT }}>
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
    )
}

export default BulletinBoard;