import * as React from "react";
import { X, Check, ChevronsUpDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export type Option = {
  value: string;
  label: string;
};

interface MultiSelectProps {
  options: Option[];
  selected: Option[];
  onChange: (options: Option[]) => void;
  placeholder?: string;
}

export const MultiSelect = ({
  options,
  selected,
  onChange,
  placeholder = "",
}: MultiSelectProps) => {
  const [open, setOpen] = React.useState(false);

  const handleUnselect = (option: Option) => {
    onChange(selected.filter((item) => item.value !== option.value));
  };

  const handleSelect = (currentValue: string) => {
    const option = options.find((opt) => opt.value === currentValue);
    if (!option) return;

    const isSelected = selected.find((item) => item.value === option.value);
    if (isSelected) {
      onChange(selected.filter((item) => item.value !== option.value));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-fit h-fit min-w-60 justify-between hover:bg-background/90 group"
        >
          <div className="flex gap-1 flex-wrap flex-1 items-center">
            {selected.length === 0 && (
              <span className="font-normal text-muted-foreground">
                {placeholder}
              </span>
            )}
            {selected.map((option) => (
              <Badge
                key={option.value}
                variant="secondary"
                className="mr-1 mb-1 group/badge hover:bg-secondary"
              >
                {option.label}
                <button
                  className="ml-1 ring-offset-background rounded-full outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-hover/badge:bg-secondary/80"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleUnselect(option);
                    }
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    handleUnselect(option);
                  }}
                >
                  <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                </button>
              </Badge>
            ))}
          </div>
          <ChevronsUpDown className="h-4 w-4 shrink-0 opacity-50 text-muted-foreground" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Поиск..." />
          <CommandEmpty>Не найдено.</CommandEmpty>
          <CommandGroup className="max-h-64 overflow-auto">
            {options.map((option) => {
              const isSelected = selected.find(
                (item) => item.value === option.value,
              );
              return (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={handleSelect}
                  className="cursor-pointer"
                >
                  <div className="flex justify-between items-center gap-2 flex-1">
                    {option.label}
                    <Check
                      className={cn(
                        "h-4 w-4 flex",
                        isSelected ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </div>
                </CommandItem>
              );
            })}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
