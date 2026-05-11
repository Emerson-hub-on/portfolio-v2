export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      about: {
        Row: {
          id: string
          intro_subtitle: string | null
          intro_title: string | null
          paragraph1: string | null
          paragraph2: string | null
          photo_shape: string | null
          photo_url: string | null
          stat_clients: string | null
          stat_coffee: string | null
          stat_experience: string | null
          stat_projects: string | null
          title_line1: string | null
          title_line2: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          intro_subtitle?: string | null
          intro_title?: string | null
          paragraph1?: string | null
          paragraph2?: string | null
          photo_shape?: string | null
          photo_url?: string | null
          stat_clients?: string | null
          stat_coffee?: string | null
          stat_experience?: string | null
          stat_projects?: string | null
          title_line1?: string | null
          title_line2?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          intro_subtitle?: string | null
          intro_title?: string | null
          paragraph1?: string | null
          paragraph2?: string | null
          photo_shape?: string | null
          photo_url?: string | null
          stat_clients?: string | null
          stat_coffee?: string | null
          stat_experience?: string | null
          stat_projects?: string | null
          title_line1?: string | null
          title_line2?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      contact: {
        Row: {
          email: string | null
          github_url: string | null
          id: string
          linkedin_url: string | null
          twitter_url: string | null
          updated_at: string | null
        }
        Insert: {
          email?: string | null
          github_url?: string | null
          id?: string
          linkedin_url?: string | null
          twitter_url?: string | null
          updated_at?: string | null
        }
        Update: {
          email?: string | null
          github_url?: string | null
          id?: string
          linkedin_url?: string | null
          twitter_url?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      experiences: {
        Row: {
          company: string
          description: string | null
          id: string
          order_index: number | null
          period: string
          role: string
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          company: string
          description?: string | null
          id?: string
          order_index?: number | null
          period: string
          role: string
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          company?: string
          description?: string | null
          id?: string
          order_index?: number | null
          period?: string
          role?: string
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      hero: {
        Row: {
          btn_primary: string | null
          btn_secondary: string | null
          description: string | null
          id: string
          stat_experience: string | null
          stat_projects: string | null
          title_complement: string | null
          title_highlight: string | null
          updated_at: string | null
          welcome_tag: string | null
        }
        Insert: {
          btn_primary?: string | null
          btn_secondary?: string | null
          description?: string | null
          id?: string
          stat_experience?: string | null
          stat_projects?: string | null
          title_complement?: string | null
          title_highlight?: string | null
          updated_at?: string | null
          welcome_tag?: string | null
        }
        Update: {
          btn_primary?: string | null
          btn_secondary?: string | null
          description?: string | null
          id?: string
          stat_experience?: string | null
          stat_projects?: string | null
          title_complement?: string | null
          title_highlight?: string | null
          updated_at?: string | null
          welcome_tag?: string | null
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string | null
          demo_url: string | null
          description: string | null
          emoji: string | null
          github_url: string | null
          id: string
          name: string
          order_index: number | null
          tags: string[] | null
          updated_at: string | null
          visible: boolean | null
        }
        Insert: {
          created_at?: string | null
          demo_url?: string | null
          description?: string | null
          emoji?: string | null
          github_url?: string | null
          id?: string
          name: string
          order_index?: number | null
          tags?: string[] | null
          updated_at?: string | null
          visible?: boolean | null
        }
        Update: {
          created_at?: string | null
          demo_url?: string | null
          description?: string | null
          emoji?: string | null
          github_url?: string | null
          id?: string
          name?: string
          order_index?: number | null
          tags?: string[] | null
          updated_at?: string | null
          visible?: boolean | null
        }
        Relationships: []
      }
      skill_groups: {
        Row: {
          emoji: string | null
          id: string
          name: string
          order_index: number | null
          updated_at: string | null
        }
        Insert: {
          emoji?: string | null
          id?: string
          name: string
          order_index?: number | null
          updated_at?: string | null
        }
        Update: {
          emoji?: string | null
          id?: string
          name?: string
          order_index?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      skill_tags: {
        Row: {
          id: string
          name: string
          order_index: number | null
        }
        Insert: {
          id?: string
          name: string
          order_index?: number | null
        }
        Update: {
          id?: string
          name?: string
          order_index?: number | null
        }
        Relationships: []
      }
      skills: {
        Row: {
          group_id: string | null
          id: string
          level: number | null
          name: string
          order_index: number | null
        }
        Insert: {
          group_id?: string | null
          id?: string
          level?: number | null
          name: string
          order_index?: number | null
        }
        Update: {
          group_id?: string | null
          id?: string
          level?: number | null
          name?: string
          order_index?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "skills_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "skill_groups"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
