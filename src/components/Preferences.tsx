import { CollectionPreferences } from '@cloudscape-design/components';
import React from 'react'
export const PAGE_SIZE_OPTIONS = [
    { value: 10, label: '10 Distributions' },
    { value: 30, label: '30 Distributions' },
    { value: 50, label: '50 Distributions' },
  ];

  
const Preferences = ({ setPreferences, preferences, columnDispokayProps ,disabled}: any) => {
    return (
        <div>
            <CollectionPreferences
                disabled={disabled}
                title="Settings"
                onConfirm={({ detail }) =>{setPreferences(detail)}}
                confirmLabel="Confirm"
                cancelLabel="Cancel"
                preferences={preferences}
                pageSizePreference={{
                    title: "Page size",
                    options:PAGE_SIZE_OPTIONS
                }}
               
                contentDisplayPreference={{
                    options: columnDispokayProps.map((col) => {
                        return {
                            ...col,
                            label: `${col.id}`.toUpperCase()
                        };
                    })
                }}

                stickyColumnsPreference={{
                    firstColumns: {
                        title: "Stick first column(s)",
                        description:
                            "Keep the first column(s) visible while horizontally scrolling the table content.",
                        options: [
                            { label: "None", value: 0 },
                            { label: "First column", value: 1 },
                            { label: "First two columns", value: 2 }
                        ]
                    },
                    lastColumns: {
                        title: "Stick last column",
                        description:
                            "Keep the last column visible while horizontally scrolling the table content.",
                        options: [
                            { label: "None", value: 0 },
                            { label: "Last column", value: 1 }
                        ]
                    }
                }}
            />
        </div>
    )
}

export default Preferences