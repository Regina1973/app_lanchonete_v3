import { describe, expect, it, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { ThemeContext, useTheme, THEMES } from "./ThemeContext";

describe("useTheme", () => {
  it("retorna o tema atual do contexto", () => {
    const wrapper = ({ children }) => (
      <ThemeContext.Provider
        value={{
          theme: THEMES.LIGHT,
          resolvedTheme: THEMES.LIGHT,
          setTheme: vi.fn(),
        }}
      >
        {children}
      </ThemeContext.Provider>
    );

    const { result } = renderHook(() => useTheme(), {
      wrapper,
    });

    expect(result.current.theme).toBe(THEMES.LIGHT);
    expect(result.current.resolvedTheme).toBe(THEMES.LIGHT);
  });

  it("permite alterar o tema", () => {
    const setTheme = vi.fn();

    const wrapper = ({ children }) => (
      <ThemeContext.Provider
        value={{
          theme: THEMES.LIGHT,
          resolvedTheme: THEMES.LIGHT,
          setTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );

    const { result } = renderHook(() => useTheme(), {
      wrapper,
    });

    act(() => {
      result.current.setTheme(THEMES.DARK);
    });

    expect(setTheme).toHaveBeenCalledWith(THEMES.DARK);
  });

  it("expõe todos os temas suportados", () => {
    expect(THEMES.LIGHT).toBe("light");
    expect(THEMES.DARK).toBe("dark");
    expect(THEMES.MONO_LIGHT).toBe("monochromatic-light");
    expect(THEMES.MONO_DARK).toBe("monochromatic-dark");
    expect(THEMES.SYSTEM).toBe("system");
  });
});