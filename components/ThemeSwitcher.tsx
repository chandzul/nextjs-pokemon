// components/ThemeSwitcher.tsx
import { Switch } from "@nextui-org/react";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Switch
      onValueChange={(isSelected: boolean) => (isSelected ? setTheme('dark') : setTheme('light'))}
      defaultSelected
      size="lg"
      color="primary"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} data-checked={""} isSelected={false} isIndeterminate={false} disableAnimation={false} />
        ) : (
          <MoonIcon className={className} data-checked={""} isSelected={false} isIndeterminate={false} disableAnimation={false} />
        )
      }
    >
      {/* Dark mode */}
    </Switch>
  )
};