import React, { useState } from "react";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function AllProductsMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Menu.Root open={open} onOpenChange={e => setOpen(e.open)}>
      <Menu.Trigger asChild outline="none" onMouseEnter={() => setOpen(true)}>
        <Button variant="plain" size="sm" fontWeight={600}>
          All Products <ChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content className="font-medium">
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem className="font-medium">
                MTN FibreX <ChevronRight size={16} />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="fibrex-purchase">MTN FibreX Purchase</Menu.Item>
                    <Menu.Item value="fibrex-subscription">MTN FibreX Subscription</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem className="font-medium">
                Devices <ChevronRight size={16} />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="broadband-devices">Broadband Devices</Menu.Item>
                    <Menu.Item value="eyesyte">EyeSyte</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem className="font-medium">
                Airtime Recharge <ChevronRight size={16} />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="buy-airtime">Buy Airtime</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem className="font-medium">
                Data Bundles <ChevronRight size={16} />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="access-bundles">Access Bundles</Menu.Item>
                    <Menu.Item value="digital-bundles">Digital Bundles</Menu.Item>
                    <Menu.Item value="family-time-bundles">Family Time Bundles</Menu.Item>
                    <Menu.Item value="xtravalue-bundles">XtraValue Bundles</Menu.Item>
                    <Menu.Item value="broadband-bundles">Broadband Bundles</Menu.Item>
                    <Menu.Item value="social-bundles">Social Bundles</Menu.Item>
                    <Menu.Item value="international-bundles">International Roaming Bundles</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem className="font-medium">
                Business <ChevronRight size={16} />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="mtn-thryve">MTN Thryve</Menu.Item>
                    <Menu.Item value="learning-bundle">Learning Bundle</Menu.Item>
                    <Menu.Item value="bizplus">BizPlus</Menu.Item>
                    <Menu.Item value="education-bundles">Education Bundles</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
            <Menu.Root positioning={{ placement: "right-start", gutter: 2 }}>
              <Menu.TriggerItem className="font-medium">
                Cloud <ChevronRight size={16} />
              </Menu.TriggerItem>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    <Menu.Item value="microsoft-365">Microsoft 365</Menu.Item>
                    <Menu.Item value="cloudenly">Cloudenly HR & Payroll</Menu.Item>
                    <Menu.Item value="eset">ESET Antivirus License</Menu.Item>
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
}
