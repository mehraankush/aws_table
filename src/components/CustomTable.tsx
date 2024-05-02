"use client"
import * as React from "react";
import Table from "@cloudscape-design/components/table";
import TextFilter from "@cloudscape-design/components/text-filter";
import Pagination from "@cloudscape-design/components/pagination";
import { useCollection } from "@cloudscape-design/collection-hooks";
import FullHeader from "./FullHeader";
import { TableEmptyState, TableNoMatchState } from "./commons/common-components";
import { getTextFilterCounterText } from "@/utils/tsble";
import { useLocalStorage } from "./customhooks/use-local-storage";
import Preferences from "./Preferences";
import { DEFAULT_PREFERENCES } from "@/utils/prefernece";


const CustomTable = ({ itemsProps, columnDispokayProps, columnDefinitionsProps }: any) => {
    const [selectedItems, setSelectedItems] = React.useState([]);
    // const [columnDefinitions, saveWidths] = useColumnWidths('React-Table-Widths', COLUMN_DEFINITIONS);
    const [preferences, setPreferences] = useLocalStorage('React-Table-Preferences', DEFAULT_PREFERENCES(columnDispokayProps));

    const { items, paginationProps, collectionProps, filterProps, filteredItemsCount } = useCollection(
        itemsProps?.trades || [],
        {
            filtering: {    
                empty: <TableEmptyState resourceName="Trades" />,
                noMatch: <TableNoMatchState onClearFilter={() => actions?.setFiltering('')} />,
            },
            pagination: { pageSize: itemsProps?.count },
            sorting: { defaultState: { sortingColumn: columnDefinitionsProps[0] } },
            selection: {},
        }
    );

    console.log(preferences, "preferences");
    return (
        <Table
            {...collectionProps}
            stickyHeader={true}
            resizableColumns={true}
            // enableKeyboardNavigation={true}
            // onColumnWidthsChange={saveWidths}
            selectionType="multi"
            contentDensity={"comfortable"}
            wrapLines={preferences.wrapLines}
            stripedRows={preferences.stripedRows}
            onSelectionChange={({ detail }: any) =>
                setSelectedItems(detail?.selectedItems)
            }
            selectedItems={selectedItems}
            columnDefinitions={columnDefinitionsProps}
            columnDisplay={preferences.contentDisplay}
            items={items}
            loading={itemsProps?.trades ? false : true}
            loadingText="Loading Trades"

            filter={
                <TextFilter
                    {...filterProps}
                    filteringAriaLabel="Filter distributions"
                    filteringPlaceholder="Find distributions"
                    filteringClearAriaLabel="Clear"
                    countText={getTextFilterCounterText(filteredItemsCount)}
                />
            }
            empty={<TableEmptyState resourceName="Trades" />}
            header={
                <FullHeader
                    counter={itemsProps?.count}
                />
            }
            pagination={<Pagination {...paginationProps} />}

            preferences={
            <Preferences
                columnDispokayProps={columnDispokayProps}
                preferences={preferences}
                setPreferences={setPreferences}
            />
            }
        />
    );
}

export default CustomTable